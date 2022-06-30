.PHONY: test 

test:
	@docker build -f Dockerfile.unit-tests . -t vector-unit-test-runner:0.0.0

run-local:
	@docker run -i -t --rm vector-unit-test-runner:0.0.0
