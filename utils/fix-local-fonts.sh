#!/usr/bin/env bash

sed -i.bak 's,_next/static/media,../media,g' out/_next/static/css/*.css
rm -rf out/**/*.bak
