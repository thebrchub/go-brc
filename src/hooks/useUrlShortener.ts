import { useState } from 'react';
import { isValidUrl } from '../utils/validation';

export const useUrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShorten = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setShortUrl('');
    setCopied(false);

    if (!url.trim()) {
      setError('Please enter a URL.');
      return;
    }
    if (!isValidUrl(url)) {
      setError('Please enter a valid HTTP or HTTPS URL.');
      return;
    }

    setLoading(true);
    
    // Simulate network delay for a realistic feel
    setTimeout(() => {
      const randomCode = Math.random().toString(36).substring(2, 8);
      setShortUrl(`go.brchub.tech/${randomCode}`);
      setLoading(false);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setUrl('');
    setShortUrl('');
    setError('');
    setCopied(false);
  };

  return { url, setUrl, shortUrl, loading, error, copied, handleShorten, handleCopy, reset };
};