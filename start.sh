#!/usr/bin/env bash
export CACHE_MAXSIZE=1000;
export CACHE_TTL=600;
export PAGE_DONE_CHECK_INTERVAL=1000;
export PAGE_LOAD_TIMEOUT=20000;
export WAIT_AFTER_LAST_REQUEST=2000;
export FOLLOW_REDIRECTS=false;
node server.js