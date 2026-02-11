package com.maxprint.service;

import com.maxprint.model.Cart;
import com.maxprint.model.CartItem;
import com.maxprint.model.Product;
import com.maxprint.repository.CartRepository;
import com.maxprint.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import com.maxprint.dto.CartUpdateEvent;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final SimpMessagingTemplate messagingTemplate;

    public Cart getCart(String sessionId) {
        return cartRepository.findBySessionId(sessionId)
                .orElseGet(() -> {
                    Cart cart = new Cart();
                    cart.setSessionId(sessionId != null ? sessionId : UUID.randomUUID().toString());
                    return cartRepository.save(cart);
                });
    }

    @Transactional
    public Cart addToCart(String sessionId, Long productId, Integer quantity) {
        Cart cart = getCart(sessionId);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Optional<CartItem> existingItem = cart.getItems().stream()
                .filter(item -> item.getProduct().getId().equals(productId))
                .findFirst();

        if (existingItem.isPresent()) {
            existingItem.get().setQuantity(existingItem.get().getQuantity() + quantity);
        } else {
            CartItem newItem = new CartItem(null, cart, product, quantity);
            cart.addItem(newItem);
        }

        Cart savedCart = cartRepository.save(cart);
        messagingTemplate.convertAndSend("/topic/cart/" + sessionId, new CartUpdateEvent(sessionId, "Item added to cart", System.currentTimeMillis()));
        return savedCart;
    }

    @Transactional
    public Cart removeFromCart(String sessionId, Long productId) {
        Cart cart = getCart(sessionId);
        cart.getItems().removeIf(item -> item.getProduct().getId().equals(productId));
        Cart savedCart = cartRepository.save(cart);
        messagingTemplate.convertAndSend("/topic/cart/" + sessionId, new CartUpdateEvent(sessionId, "Item removed from cart", System.currentTimeMillis()));
        return savedCart;
    }
    
    @Transactional
    public Cart updateQuantity(String sessionId, Long productId, Integer quantity) {
         Cart cart = getCart(sessionId);
         cart.getItems().stream()
                .filter(item -> item.getProduct().getId().equals(productId))
                .findFirst()
                .ifPresent(item -> item.setQuantity(quantity));
         return cartRepository.save(cart);
    }
}
