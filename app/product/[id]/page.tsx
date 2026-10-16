
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "./AddToCart";

const products = [
  {
    id: "rose-gold",
    name: "The Rose Gold Hamper",
    price: 2499,
    category: "Premium Hampers",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=85",
    description:
      "A thoughtfully curated gift hamper with elegant presentation, perfect for birthdays, anniversaries and heartfelt surprises.",
  },
  {
    id: "sweet-moments",
    name: "Sweet Moments Box",
    price: 1499,
    category: "Chocolate Gifts",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85",
    description:
      "A delightful gifting box designed to make celebrations sweeter and special moments more memorable.",
  },
  {
    id: "celebration",
    name: "The Celebration Hamper",
    price: 2999,
    category: "Celebration Gifts",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1000&q=85",
    description:
      "Make their big day feel even more special with a beautifully presented celebration gift.",
  },
  {
    id: "little-love",
    name: "A Little Love Box",
    price: 999,
    category: "Thoughtful Gifts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=85",
    description:
      "A sweet little surprise for someone who deserves a reminder that they are loved.",
  },
  {
    id: "golden-glow",
    name: "Golden Glow Hamper",
    price: 1999,
    category: "Premium Hampers",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=85",
    description:
      "A sophisticated gifting choice for celebrations, thank-you gestures and special milestones.",
  },
  {
    id: "just-because",
    name: "Just Because Box",
    price: 1299,
    category: "Thoughtful Gifts",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=85",
    description:
      "No occasion needed. Surprise a favourite person with a thoughtful gift chosen just for them.",
  },
  {
    id: "choco-love",
    name: "Chocolate Love Hamper",
    price: 1799,
    category: "Chocolate Gifts",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1000&q=85",
    description:
      "A chocolate-inspired gifting option for sweet celebrations and people with a love for treats.",
  },
  {
    id: "signature",
    name: "The Signature Collection",
    price: 3499,
    category: "Luxury Gifts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1000&q=85",
    description:
      "A statement gift for meaningful occasions when you want your gesture to feel extra special.",
  },
];

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  const related = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <div className="announcement">
        Thoughtful gifting, beautifully delivered
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-icon">H</span>
            <span>
              <span className="brand-name">Hampers Heaven</span>
              <span className="brand-tagline">
                GIFTS THAT FEEL LIKE LOVE
              </span>
            </span>
          </Link>

          <nav className="header-actions">
            <Link href="/shop" className="icon-link">
              Shop
            </Link>
            <Link href="/wishlist" className="icon-link">
              Wishlist
            </Link>
            <Link href="/cart" className="icon-link">
              My Bag
            </Link>
          </nav>
        </div>
      </header>

      <main className="container content-page">
        <p className="eyebrow">
          <Link href="/shop">SHOP</Link> / {product.category.toUpperCase()}
        </p>

        <div className="cart-layout">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <section className="form-card">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>

            <p className="product-price">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p>{product.description}</p>

            <div className="notice">
              <strong>A gift worth remembering</strong>
              <p>
                Perfect for birthdays, anniversaries and thoughtful
                surprises. Contact us to confirm availability and
                the exact hamper contents.
              </p>
            </div>

            <AddToCart
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                description: product.description,
              }}
            />

            <a
              href={`https://wa.me/919122930001?text=${encodeURIComponent(
                `Hello Hampers Heaven! I'm interested in the ${product.name} priced at ₹${product.price}. Please confirm availability and contents.`
              )}`}
              className="button button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>

            <p className="muted">
              Availability, delivery charges and final order details
              will be confirmed with you.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">MORE TO LOVE</p>
            <h2>You may also like</h2>
          </div>

          <div className="product-grid">
            {related.map((item) => (
              <article className="product-card" key={item.id}>
                <Link
                  href={`/product/${item.id}`}
                  className="product-image"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>

                <div className="product-info">
                  <p className="eyebrow">{item.category}</p>
                  <h3>
                    <Link href={`/product/${item.id}`}>
                      {item.name}
                    </Link>
                  </h3>
                  <p className="product-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                  <Link
                    href={`/product/${item.id}`}
                    className="button button-outline"
                  >
                    View Hamper
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Hampers Heaven</span>
          <Link href="/contact">Contact Us</Link>
        </div>
      </footer>
    </>
  );
}
