import React, { FC } from "react";

interface Props {
    name: string;
    age: number;
    isMarried?: boolean;
}

const Person: FC<Props> = ({ name, age, isMarried }) => {
    return (
        <div>
            <div>{name}</div>
            <div>{age}</div>
            <div>{isMarried ? "yes" : "No"}</div>
        </div>
    );
};

export default Person;
