---
layout: ../../layouts/PostLayout.astro
title: 'How to make an animated gradient text with tailwindcss'
author: 'André Alves'
pubDate: '2023-03-13'
description: 'Making an animated gradient text with tailwind and a little bit of css.'
tags: ['tailwindcss', 'css', 'reactjs']
coverImage:
  src: '/images/react-tailwind-cover.jpg'
  alt: 'The logo of ReactJs and Tailwind CSS'
---

Making a website stand out from the rest can be a challenging task. However, there is a simple technique that can enhance any landing page or header: using gradient text.

While gradients can be an effective design element, it's important not to overuse them. Gradients work best when used on headings or to emphasize specific words, but should not be used for longer blocks of text.

With tailwind, this task can be really easy. With just some tailwind rules and a custom css animation you can accomplish it.

<div class="flex justify-center">
  <img src="/images/animated-gradient.gif" alt="Animated gradient text" />
</div>

## 1. Add the gradient text

```html
<span
  class="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
>
  My gradient text
</span>
```

Here, we first set the text to be bold and extra large. Then we add the background gradient colors with tailwind's "from", "via" and "to" rules. After that, we use "text-transparent" and "bg-clip-text", this will make the gradient background take over the text shape.

Now it's just missing the animation. Let's build it.

## 2. Add the animation

```css
.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 6s ease infinite alternate;
  -moz-animation: animatedgradient 6s ease infinite alternate;
  animation: animatedgradient 6s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

Basically what this animation do is to zoom in the background and go leftwards and rightwards alternating between the colors during 6 seconds.

## 3. Bonus: Create a react component for this element

```tsx
type TextGradientProps = {
  text: string
  from?: string
  via?: string
  to?: string
}

export default function TextGradient(props: TextGradientProps) {
  const from = props.from || 'from-orange-700'
  const via = props.via || 'via-blue-500'
  const to = props.to || 'to-green-400'

  return (
    <span
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text animate-gradient`}
    >
      {props.text}
    </span>
  )
}
```

Thanks for reading.