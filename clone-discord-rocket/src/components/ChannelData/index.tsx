import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';


const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])
    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author='RodrigoLessa'
                    date='19/06/2020'
                    content='Hoje é sexta'
                />

                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author='RodrigoLessa'
                        date='19/06/2020'
                        content='Partiu'
                    />
                ))}
                <ChannelMessage
                    author='Diego Fernades'
                    date='21/06/2020'
                    content={
                        <>
                            <Mention>@Rodrigo Lessa</Mention>, Sextouuuuuuu
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
