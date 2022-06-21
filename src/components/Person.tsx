import React, { FC, useState } from "react";

export enum HairColor {
    black = "Wow,black hair is nice",
    white = "cool man, white hair",
}

interface Props {
    name: string;
    age: number;
    isMarried?: boolean;
    hairColor: HairColor;
}

const Person: FC<Props> = ({ name, age, isMarried, hairColor }) => {
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
            <div>{country}</div>
            <div>{hairColor}</div>
        </div>
    );
};

export default Person;
