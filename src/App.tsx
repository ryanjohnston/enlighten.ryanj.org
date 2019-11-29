import React from 'react'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weekly Web Dev Links</h1>
      </header>
      <section className="weekly">
        <h2>November 29, 2019</h2>
        <h3>Architecture</h3>
        <ul>
          <li>
            <a href="https://micro-frontends.org/" target="_blank" rel="noopener noreferrer">
              Micro Frontends
            </a>{' '}
            - Techniques, strategies and recipes for building a modern web app with multiple teams
            that can ship features independently.
          </li>
        </ul>
        <h3>Development</h3>
        <ul>
          <li>
            <a href="https://free-for.dev/#/" target="_blank" rel="noopener noreferrer">
              Free-For.dev
            </a>{' '}
            - This is a list of software (SaaS, PaaS, IaaS, etc.) and other offerings that have free
            tiers for developers.
          </li>
          <li>
            <a href="https://firefox-replay.com/" target="_blank" rel="noopener noreferrer">
              Firefox Replay
            </a>{' '}
            - Nightly builds of Firefox now have ability to replay actions. Very early stages...
          </li>
          <li>
            <a
              href="https://cs231n.github.io/python-numpy-tutorial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Tutorial
            </a>{' '}
            - Very good tutorial on learning Python. For beginners with no Python experience.
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=t6CBKf8K_Ac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn CSS Grid
            </a>{' '}
            - Supported on all modern browsers now! Video tutorial.
          </li>
        </ul>
        <h3>Smart Home</h3>
        <ul>
          <li>
            <a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">
              Home Assistant
            </a>{' '}
            - Open source home automation portal. Run on a Raspberry Pi or a local server.
          </li>
        </ul>
        <h3>Fun</h3>
        <ul>
          <li>
            <a
              href="https://github.com/paaatrick/playball"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playball!
            </a>
          </li>{' '}
          - Watch MLB games live, from the comfort of your own terminal.
          <li>
            <a
              href="https://foundation.mozilla.org/en/privacynotincluded/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla.org - Privacy Not Included
            </a>{' '}
            - How creepy is that smart speaker, that fitness tracker, those wireless headphones? We
            created this guide to help you shop for safe, secure connected products.
          </li>
        </ul>
      </section>
      <hr />
      <h2>Notes</h2>
      <ul>
        <li>
          Read online at{' '}
          <a href="https://enlighten.ryanj.org" target="_blank" rel="noopener noreferrer">
            https://enlighten.ryanj.org
          </a>
        </li>
        <li>Published weekly on Fridays.</li>
        <li>Email subscription soon!</li>
        <li>
          Send links to <a href="mailto:ryanj@ryanj.org">ryanj@ryanj.org</a>
        </li>
        <li>
          Pull requests, comments, bugs, etc:{'  '}
          <a href="https://github.com/ryanjohnston/enlighten.ryanj.org">GitHub Repo</a>
        </li>
      </ul>
    </div>
  )
}

export default App
