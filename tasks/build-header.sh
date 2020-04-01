#!/bin/sh

# Create Header

PROJECT_NAME=$(node -p -e "require('./project.json').name")
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
PACKAGE_LICENSE=$(node -p -e "require('./package.json').license")
PACKAGE_AUTHOR=$(node -p -e "require('./package.json').author.name")

PACKAGE_HEADER="/*! $PROJECT_NAME v$PACKAGE_VERSION $PACKAGE_LICENSE by $PACKAGE_AUTHOR*/"

tempPath='./src/assets/extracts/.temp'

mkdir -p "$tempPath"

echo $PACKAGE_HEADER > "$tempPath/shitaji-header.css"

# Replace Header

replace '\*\/' ' */' "$tempPath/shitaji-header.css"

# Concat Header

concat -o './dist/shitaji.css' "$tempPath/shitaji-header.css" './dist/shitaji.css'