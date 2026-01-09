// SpotlightForm.tsx
import React from 'react';
import { AlertCircle, Check } from 'lucide-react';
import type { SpotlightConfigFormProps } from './types';

export const SpotlightConfigForm: React.FC<SpotlightConfigFormProps> = ({
    spaceTitle, setSpaceTitle, 
    hostName, setHostName,
    cohost1Name, setCohost1Name,
    cohost2Name, setCohost2Name,
    userNameInputs,
    scheduledDate, setScheduledDate,
    disclaimer, setDisclaimer,
    useOptionalStatement, setUseOptionalStatement,
    isLoading, fetchAllSpotlightData,
    errors
}) => (
    <div className="p-8 bg-white rounded-xl shadow-2xl max-w-2xl mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-3xl text-gray-900">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Space Spotlight</h2>
        
        <div className="space-y-6">
            {/* Title Input */}
            <div>
                <label className="block text-sm font-semibold mb-1">Spotlight Title *</label>
                <input 
                    type="text" 
                    value={spaceTitle} 
                    onChange={(e) => setSpaceTitle(e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${errors.spaceTitle ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.spaceTitle && <p className="text-red-600 text-xs mt-1">{errors.spaceTitle}</p>}
            </div>

            {/* Host Inputs */}
            <div className="bg-orange-50 p-4 rounded-lg grid grid-cols-2 gap-4">
                <div className="col-span-2 font-bold text-gray-700">Host Team</div>
                <input placeholder="Host*" value={hostName} onChange={(e) => setHostName(e.target.value)} className="p-3 border rounded-lg" />
                <input placeholder="Co-Host 1" value={cohost1Name} onChange={(e) => setCohost1Name(e.target.value)} className="p-3 border rounded-lg" />
                <input placeholder="Co-Host 2" value={cohost2Name} onChange={(e) => setCohost2Name(e.target.value)} className="p-3 border rounded-lg" />
            </div>

            {/* Dynamic User Inputs */}
            <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-bold mb-2">Spotlighted Users (Min 3)</div>
                <div className="grid grid-cols-2 gap-4">
                    {userNameInputs.map((input, index) => (
                        <div key={index}>
                            <label className="text-xs text-gray-500">{input?.label}</label>
                            <input 
                                value={input?.value || ''} 
                                onChange={(e) => input?.setValue(e.target.value)}
                                className="w-full p-3 border rounded-lg"
                                placeholder="username"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Date and Disclaimer */}
            <div className="grid grid-cols-1 gap-4">
                <input type="date" value={scheduledDate} onChange={(e) => setScheduledDate(e.target.value)} className="p-3 border rounded-lg" />
                <textarea value={disclaimer} onChange={(e) => setDisclaimer(e.target.value)} className="p-3 border rounded-lg" rows={3} />
            </div>
        </div>

        <button 
            onClick={fetchAllSpotlightData} 
            disabled={isLoading}
            className={`mt-8 w-full font-bold py-4 rounded-lg text-white transition-all 
                ${isLoading ? 'bg-gray-400' : 'bg-linier-to-r from-orange-500 to-pink-500'}`}
        >
            {isLoading ? 'Processing...' : 'Generate Spotlight Content'}
        </button>
    </div>
);