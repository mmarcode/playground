FROM python:3.13-slim AS base

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

LABEL maintainer="mmarcode@gmail.com"

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app
ENV UV_SYSTEM_PYTHON=1
ENV UV_COMPILE_BYTECODE=1
ENV UV_NO_CACHE=1

WORKDIR /app


RUN apt-get update && apt-get install -y \
    bash \
    curl \
    gcc \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

FROM base AS development

COPY requirements /tmp/requirements

RUN uv pip compile /tmp/requirements/base.in -o /tmp/requirements/base.txt && \
    uv pip compile /tmp/requirements/dev.in -o /tmp/requirements/dev.txt && \
    uv pip compile /tmp/requirements/test.in -o /tmp/requirements/test.txt && \
    uv pip compile /tmp/requirements/linting.in -o /tmp/requirements/linting.txt && \
    uv pip compile /tmp/requirements/checker.in -o /tmp/requirements/checker.txt

RUN uv pip sync \
    /tmp/requirements/base.txt \
    /tmp/requirements/dev.txt \
    /tmp/requirements/test.txt \
    /tmp/requirements/linting.txt \
    /tmp/requirements/checker.txt

COPY . .

CMD ["tail", "-f", "/dev/null"]
