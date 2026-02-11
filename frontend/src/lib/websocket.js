import { Client } from '@stomp/stompjs';
import { useEffect, useState } from 'react';

export function useCartWebSocket(sessionId, onUpdate) {
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        if (!sessionId) return;

        const client = new Client({
            brokerURL: 'ws://localhost:8080/ws',
            onConnect: () => {
                setConnected(true);
                client.subscribe(`/topic/cart/${sessionId}`, (message) => {
                    const event = JSON.parse(message.body);
                    if (onUpdate) onUpdate(event);
                });
            },
            onDisconnect: () => {
                setConnected(false);
            },
        });

        client.activate();

        return () => {
            client.deactivate();
        };
    }, [sessionId, onUpdate]);

    return connected;
}
