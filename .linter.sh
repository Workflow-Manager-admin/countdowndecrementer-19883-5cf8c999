#!/bin/bash
cd /home/kavia/workspace/code-generation/countdowndecrementer-19883-5cf8c999/countdown_decrementer
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

