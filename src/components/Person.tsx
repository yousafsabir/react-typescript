import React, { FC, useState } from "react";

interface Props {
    name: string;
    age: number;
    isMarried?: boolean;
}

const Person: FC<Props> = ({ name, age, isMarried }) => {
    const [country, setCountry] = useState<string | null>(null);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };

    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{isMarried ? "yes" : "No"}</div>
            <input
                type="text"
                placeholder="Enter the country"
                onChange={handleInput}
                // This input is working fine here bcz event is handled inside input
            />
            {country}
        </div>
    );
};

export default Person;
