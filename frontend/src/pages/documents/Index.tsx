import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../../components/common/Heading';

const DocumentIndex: React.FC = () => {
  const nav = useNavigate();

  return (
    <div>
      <section className="flex justify-between items-center p-4">
        <Heading type="h1" text="Manage documents" />
        <button
          className="border px-4 py-2"
          onClick={() => nav('/document/upload')}
        >
          Upload file
        </button>
      </section>
    </div>
  );
};

export default DocumentIndex;
