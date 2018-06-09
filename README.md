# whoami

Information website to let people know who I am and what I do.

### Setup

```bash
# Copy default config
cp config.example.json config.json

# Install NodeJS packages
npm install

# Build assets
npm run assets:build
```

### Running

Start the server

```bash
npm run assets:build
npm run server:start
```

### Development

The following commands will start the development and assets watch process, reloading the server anytime a change is applied.

```bash
npm run server:watch
npm run assets:watch
```

### Deployment

```bash
./bin/deploy.sh
```

### Contributing

Checkout the [TODO](TODO.md) doc for what needs to be worked on.
