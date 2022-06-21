import * as React from "react";

interface Props {
    name: string;
    age: number;
    isMarried?: boolean;
}

const Person = ({ name, age, isMarried }: Props) => {
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{isMarried ? "yes" : "No"}</div>
        </div>
    );
};

export default Person;
