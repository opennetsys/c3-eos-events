all:
	@echo "no default"

.PHONY: test
test:
	@npm test

.PHONY: start/example
start/example:
	@node example/example.js
