import React, { useState, useEffect } from 'react';

interface AppProps {
  data: any;
  onChange: (key: string, value: any) => void;
  onError: (key: string, value: string) => void;
  error: string;
  onNext: () => void;
  onPrevious: () => void;
}

export const FinancialInfo: React.FC<AppProps> = ({
  data,
  onChange,
  onError,
  error,
  onNext,
  onPrevious
}) => {
  const [formSummary, setFormSummary] = useState<any>({});

  useEffect(() => {
    const saved = localStorage.getItem('formdata');
    if (saved) {
      setFormSummary(JSON.parse(saved));
    }
  }, []);

  const handleNextClick = () => {
    if (!data.income) {
      onError('income', 'Income is required');
      return;
    }
    if (!data.employment) {
      onError('employment', 'Employment status is required');
      return;
    }
    console.log(data);
    onError('', '');
    onNext();
  };

  return (
    <div>
      <h3>Financial Info</h3>
      <input
        type="number"
        placeholder="Income"
        value={data.income}
        onChange={(e) => onChange('income', e.target.value)}
      />
      {error === 'income' && <p style={{ color: 'red' }}>Income is required</p>}

      <input
        type="text"
        placeholder="Employment"
        value={data.employment}
        onChange={(e) => onChange('employment', e.target.value)}
      />
      {error === 'employment' && <p style={{ color: 'red' }}>Employment status is required</p>}

      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};
