
export interface SimpleNameProps {
    name: string;
}

export const SimpleName: React.FC<SimpleNameProps> = ({ name }) => {
    return <span>Hallo, {name}</span>
};