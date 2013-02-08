#!/bin/bash

sencha app build production
rm -rf ../Mobile-Production
mv build/Mobile/production ../Mobile-Production
rm -rf archive build