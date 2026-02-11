package com.maxprint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;
import com.maxprint.repository.ProductRepository;
import com.maxprint.model.Product;
import java.math.BigDecimal;

@SpringBootApplication
public class MaxPrintApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaxPrintApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(ProductRepository repository) {
		return (args) -> {
			repository.save(new Product(null, "Premium Business Cards", "High-quality, thick business cards with matte finish. Perfect for making a lasting impression.", new BigDecimal("29.99"), "https://images.unsplash.com/photo-1593026362831-27ee2ec63251?q=80&w=2070&auto=format&fit=crop", "Business", 100));
			repository.save(new Product(null, "Glossy Flyers", "Vibrant, full-color flyers printed on glossy paper. ideal for promotions and events.", new BigDecimal("49.99"), "https://images.unsplash.com/photo-1542382156-97e324391bbd?q=80&w=2071&auto=format&fit=crop", "Marketing", 200));
			repository.save(new Product(null, "Vinyl Banners", "Durable vinyl banners suitable for indoor and outdoor use. Grommets included.", new BigDecimal("89.99"), "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", "Signage", 50));
			repository.save(new Product(null, "Brochures", "Professional tri-fold brochures on premium paper. Communicate your story effectively.", new BigDecimal("39.99"), "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop", "Marketing", 150));
			repository.save(new Product(null, "Custom Stickers", "Die-cut stickers in any shape or size. Durable and weather-resistant.", new BigDecimal("19.99"), "https://images.unsplash.com/photo-1572375992529-e274a946c757?q=80&w=2070&auto=format&fit=crop", "Merchandise", 300));
		};
	}

}
