import React from 'react'

import imageCurrency from '../../statics/images/image-currency.jpg'
import imageRestaurant from '../../statics/images/image-restaurant.jpg'
import imagePlane from '../../statics/images/image-plane.jpg'
import imageConfetti from '../../statics/images/image-confetti.jpg'

import '../../statics/styles/Articles.css'

const Articles = () => {
  return (
    <section className='articles'>
      <h2>Lastest Articles</h2>
      <section className='articles__cards'>
        <article className='article__card'>
          <figure className='article-card__image'>
            <img src={imageCurrency} alt='Article' />
          </figure>
          <div className='card__body'>
            <p className='article__author'>By Claire Robinson</p>
            <h3 className='article__title'>
              Receive money in any currency with no fees
            </h3>
            <p className='article__intro'>
              The world is getting smaller and we're becoming more mobile. So
              why should you be forced to only receive money in a single ...
            </p>
          </div>
        </article>
        <article className='article__card'>
          <figure className='article-card__image'>
            <img src={imageRestaurant} alt='Article' />
          </figure>
          <div className='card__body'>
            <p className='article__author'>By Wilson Hutton</p>
            <h3 className='article__title'>
              Treat yourself without worrying about money
            </h3>
            <p className='article__intro'>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ...
            </p>
          </div>
        </article>
        <article className='article__card'>
          <figure className='article-card__image'>
            <img src={imagePlane} alt='Article' />
          </figure>
          <div className='card__body'>
            <p className='article__author'>By Wilson Hutton</p>
            <h3 className='article__title'>
              Take your Easybank card wherever you go
            </h3>
            <p className='article__intro'>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you ...
            </p>
          </div>
        </article>
        <article className='article__card'>
          <figure className='article-card__image'>
            <img src={imageConfetti} alt='Article' />
          </figure>
          <div className='card__body'>
            <p className='article__author'>By Claire Robinson</p>
            <h3 className='article__title'>
              Our invite-only Beta accounts are now live!
            </h3>
            <p className='article__intro'>
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite through the
              site ...
            </p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default Articles
