import moviepy as mp
import os

clips = [mp.VideoFileClip(p) for p in ["input/1.mp4", "input/2.mp4"]]
video = mp.concatenate_videoclips(clips)

video.write_videofile("out.mp4")