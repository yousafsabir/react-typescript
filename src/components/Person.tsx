import * as React from "react";

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
}

const Person = (props: Props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.isMarried ? "yes" : "No"}</div>
        </div>
    );
};

export default Person;
