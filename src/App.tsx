import './tailwind.css';
import React, { useState } from 'react';
import { SpotlightConfigForm } from './forms/xspotform';
import type { UserNameInput, FormErrors } from './forms/types';


const App: React.FC = () => {
    const [spaceTitle, setSpaceTitle] = useState("");
   const [scheduledDate, setScheduledDate] = useState<string>(new Date().toISOString().split('T')[0] || '');
    const [disclaimer, setDisclaimer] = useState("Information is for educational purposes.");
    const [useOptionalStatement, setUseOptionalStatement] = useState(false);
    const [hostName, setHostName] = useState('');
    const [cohost1Name, setCohost1Name] = useState('');
    const [cohost2Name, setCohost2Name] = useState('');

    const [u1, setU1] = useState('');
    const [u2, setU2] = useState('');
    const [u3, setU3] = useState('');
    const [u4, setU4] = useState('');
    const [u5, setU5] = useState('');

    const userNameInputs: UserNameInput[] = [
        { value: u1, setValue: setU1, label: 'Spotlight 1' },
        { value: u2, setValue: setU2, label: 'Spotlight 2' },
        { value: u3, setValue: setU3, label: 'Spotlight 3' },
        { value: u4, setValue: setU4, label: 'Spotlight 4' },
        { value: u5, setValue: setU5, label: 'Spotlight 5' },
    ];

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <SpotlightConfigForm 
                {...{spaceTitle, setSpaceTitle, hostName, setHostName, cohost1Name, setCohost1Name, cohost2Name, setCohost2Name, 
                userNameInputs, scheduledDate, setScheduledDate, disclaimer, setDisclaimer, useOptionalStatement, 
                setUseOptionalStatement, isLoading, errors}}
                fetchAllSpotlightData={handleSubmit}
            />
        </div>
    );
};

export default App;
