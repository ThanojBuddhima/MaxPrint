package com.maxprint.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartUpdateEvent {
    private String sessionId;
    private String message;
    private long timestamp;
}
