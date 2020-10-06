#!/bin/bash

find /recordings -size +1k -name "*video.mjr" -print0 | while read -d $'\0' f 
do
  janus-pp-rec ./"$f" "${f%.mjr}.webm" 
done

mv /recordings/*.webm /usr/local/share/janus/demos/rcs

find /recordings -size +1k -name "*audio.mjr" -print0 | while read -d $'\0' f 
do
  janus-pp-rec ./"$f" "${f%.mjr}.opus" 
done

mv /recordings/*.opus /usr/local/share/janus/demos/rcs