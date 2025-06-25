import { useState, useCallback } from 'react';
import aiService from '../services/aiService';

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeAI = useCallback(async (operation, ...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await aiService[operation](...args);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const matchScholarships = useCallback((studentProfile) => {
    return executeAI('matchScholarships', studentProfile);
  }, [executeAI]);

  const validateFAFSA = useCallback((fafsaData) => {
    return executeAI('validateFAFSA', fafsaData);
  }, [executeAI]);

  const enhanceResume = useCallback((experienceData) => {
    return executeAI('enhanceResume', experienceData);
  }, [executeAI]);

  const analyzeCareerDNA = useCallback((assessmentData) => {
    return executeAI('analyzeCareerDNA', assessmentData);
  }, [executeAI]);

  const processDocument = useCallback((file, documentType) => {
    return executeAI('processDocument', file, documentType);
  }, [executeAI]);

  return {
    loading,
    error,
    matchScholarships,
    validateFAFSA,
    enhanceResume,
    analyzeCareerDNA,
    processDocument,
  };
};