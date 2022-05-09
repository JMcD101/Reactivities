import React from "react";
import { Message, MessageItem } from "semantic-ui-react";

interface Props {
    errors: any;
}

export default function ValidationErrors({ errors }: Props) {
    console.log(errors)


    return (
        <Message error>
            {errors && (
                <Message.List>
                    {errors.map((err: any, i: any) =>
                    (
                        <MessageItem key={i}>{err}</MessageItem>
                    ))}
                </Message.List>
            )}
        </Message>
    )
}