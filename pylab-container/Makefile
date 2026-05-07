COMPOSE=docker compose
APP=pylab-container

up:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) down
	$(COMPOSE) up -d --build

bash:
	docker exec -it $(APP) bash

python:
	docker exec -it $(APP) python

ipython:
	docker exec -it $(APP) ipython

compile:
	docker exec -it $(APP) uv pip compile requirements/base.in -o requirements/base.txt
	docker exec -it $(APP) uv pip compile requirements/dev.in -o requirements/dev.txt
	docker exec -it $(APP) uv pip compile requirements/test.in -o requirements/test.txt
	docker exec -it $(APP) uv pip compile requirements/linting.in -o requirements/linting.txt
	docker exec -it $(APP) uv pip compile requirements/checker.in -o requirements/checker.txt

sync:
	docker exec -it $(APP) uv pip sync \
		requirements/base.txt \
		requirements/dev.txt \
		requirements/test.txt \
		requirements/linting.txt \
		requirements/checker.txt

lint:
	docker exec -it $(APP) ruff check .

format:
	docker exec -it $(APP) black .

typecheck:
	docker exec -it $(APP) mypy .

test:
	docker exec -it $(APP) pytest
