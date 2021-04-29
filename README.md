# JSX Exercises

<h2>Part 1</h2>
<p>For this assignment you will be creating three components:</p>
<dl class="docutils">
<dt><cite>FirstComponent</cite></dt><dd>renders an <cite>h1</cite> with the text “My very first component”.</dd>
<dt><cite>NamedComponent</cite></dt><dd>renders a <cite>p</cite> that should accept a property of “name” and display text
“My name is <em>name</em>”.</dd>
<dt><cite>App</cite></dt><dd>renders a <cite>div</cite> with instances of the other two components.</dd>
</dl>

<h2>Part 2</h2>
<p>Define a <cite>Tweet</cite> component which takes as props the username of the user who
wrote the tweet, the name of the user who wrote the tweet, the date of the
tweet, and the message being tweeted.</p>
<p>Create an <cite>App</cite> component that renders at least three tweets.</p>

<h2>Part 3</h2>
<p>Create a component called <cite>Person</cite>. Inside of this component, render a <cite>p</cite> tag
which displays “Learn some information about this person”. Each person should
have name and age properties.</p>
<p>If the person is over 18 years old, display an additional <cite>h3</cite> that says
“please go vote!”. Otherwise, display an <cite>h3</cite> that says “you must be 18”. If
the person’s name is longer than 8 characters, only display the first six
characters of their name.</p>
<p>Add a property called hobbies to your <cite>Person</cite> component that accepts an array
of hobbies (an array of strings).  Your Person component should list each one
of these hobbies as an <cite>li</cite>.</p>
<p>Add an <cite>App</cite> component that renders at least three copies of the <cite>Person</cite>
component on the page.</p>
