import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createManual } from '../../services/manual';
import { COLORS } from '../../colors/colors';

const CreateManualForm = ({ refreshManuals, onClose }) => {
    const [name, setName] = useState('');
    const [document, setDocument] = useState(null);
    const { id } = useParams();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDocumentChange = (e) => {
        setDocument(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const solution = id
        const formData = new FormData();
        formData.append('name', name);
        formData.append('document', document);
        formData.append('solution', solution);

        createManual(formData).then((res) => {
            refreshManuals();
            onClose();
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #d9d9d9', borderRadius: '10px' }} />
            </div>
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="document" style={{ display: 'block', marginBottom: '0.5rem' }}>Documento:</label>

                <input type="file" id="document" onChange={handleDocumentChange} style={{ width: '100%', padding: '0.5rem' }} />
            </div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'end' }}>
                <button type="submit" style={{ backgroundColor: COLORS.primary, color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}>Create Manual</button>
            </div>
        </form>

    );
};

export default CreateManualForm;
