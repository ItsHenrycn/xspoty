// Form1 types.ts
export interface UserNameInput {
    value: string;
    setValue: (value: string) => void;
    label: string;
}

export interface FormErrors {
    spaceTitle?: string;
    hostName?: string;
    scheduledDate?: string;
    spotlightUsers?: string;
}

export interface SpotlightConfigFormProps {
    spaceTitle: string;
    setSpaceTitle: (value: string) => void;
    hostName: string;
    setHostName: (value: string) => void;
    cohost1Name: string;
    setCohost1Name: (value: string) => void;
    cohost2Name: string;
    setCohost2Name: (value: string) => void;
    userNameInputs: UserNameInput[];
    scheduledDate: string;
    setScheduledDate: (value: string) => void;
    disclaimer: string;
    setDisclaimer: (value: string) => void;
    useOptionalStatement: boolean;
    setUseOptionalStatement: (value: boolean) => void;
    isLoading: boolean;
    fetchAllSpotlightData: () => void;
    errors: FormErrors;
}