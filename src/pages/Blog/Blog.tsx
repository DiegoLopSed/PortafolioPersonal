import { SEO } from '@/components/SEO/SEO';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { IconExternalLink } from '@/components/icons/Icons';
import './Blog.scss';

export function Blog() {
  return (
    <>
      <SEO
        title="Blog"
        description={`Artículos y publicaciones de ${siteConfig.name} sobre desarrollo backend, AWS y buenas prácticas.`}
        path="/blog"
      />

      <section className="section blog" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-header__label">Blog</span>
            <h1 id="blog-heading" className="section-header__title">
              Publicaciones
            </h1>
            <p className="section-header__description">
              Notas técnicas, guías y reflexiones sobre desarrollo de software.
            </p>
          </div>

          <div className="blog__list" role="list">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog__card" role="listitem">
                <div className="blog__meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('es-MX', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime} de lectura</span>
                </div>

                <h2 className="blog__title">
                  {post.url && post.url !== '#' ? (
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      {post.title}
                      <IconExternalLink size={16} />
                    </a>
                  ) : (
                    post.title
                  )}
                </h2>

                <p className="blog__excerpt">{post.excerpt}</p>

                <div className="blog__tags" role="list" aria-label="Etiquetas">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag" role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
