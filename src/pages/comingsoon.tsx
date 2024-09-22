import React from 'react'
import  FadeIn  from '@/components/animation/FadeIn'
import Title from '@/components/core/Title'
const comingsoon = () => {
  return (
    <>
    <Title title="COMING SOON" />
    <FadeIn delay={0.15}>
      <h2 className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-8 text-zinc-600 dark:text-zinc-500">
        &ldquo; The event will last 48 hours and follow a hybrid format: 8 hours online, 8 hours offline. Problem statements will be released here at 10 AM sharp on Saturday, September 28th, 2024.&rdquo;
      </h2>
      </FadeIn>
</>
  )
}

export default comingsoon