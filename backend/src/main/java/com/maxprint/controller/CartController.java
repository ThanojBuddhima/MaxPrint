package com.maxprint.controller;

import com.maxprint.model.Cart;
import com.maxprint.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/{sessionId}")
    public ResponseEntity<Cart> getCart(@PathVariable String sessionId) {
        return ResponseEntity.ok(cartService.getCart(sessionId));
    }

    @PostMapping("/{sessionId}/add")
    public ResponseEntity<Cart> addToCart(@PathVariable String sessionId, @RequestParam Long productId, @RequestParam Integer quantity) {
        return ResponseEntity.ok(cartService.addToCart(sessionId, productId, quantity));
    }

    @DeleteMapping("/{sessionId}/remove")
    public ResponseEntity<Cart> removeFromCart(@PathVariable String sessionId, @RequestParam Long productId) {
        return ResponseEntity.ok(cartService.removeFromCart(sessionId, productId));
    }
    
    @PutMapping("/{sessionId}/update")
    public ResponseEntity<Cart> updateQuantity(@PathVariable String sessionId, @RequestParam Long productId, @RequestParam Integer quantity) {
        return ResponseEntity.ok(cartService.updateQuantity(sessionId, productId, quantity));
    }
}
