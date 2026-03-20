# colors
BLUE:=$(shell echo "\033[0;36m")
GREEN:=$(shell echo "\033[0;32m")
YELLOW:=$(shell echo "\033[0;33m")
RED:=$(shell echo "\033[0;31m")
END:=$(shell echo "\033[0m")

.DEFAULT_GOAL := help

define color
	@echo "$($1)$2$(END)"
endef

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: install test lint qa publish publish-dry

install: ## Install dependencies
	yarn install

test: ## Run tests
	yarn test

lint: ## Run lint
	yarn lint

qa: ## Run tests and lint
	yarn test
	yarn lint

publish: ## Publish to npm (with provenance, run in CI only)
	npm publish --access public --provenance

pack: ## Simulate full publish process without actually publishing
	npm publish --dry-run --access public
