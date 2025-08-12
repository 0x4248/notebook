# Compresses images so the height is lower than 1000px and uses as more compression as possible

# create a folder called "IMAGES_GOES_HERE" and put all the images you want to compress in there
# then compress each one into a new folder called "IMAGES_COMPRESSED" with the same name

import os
from PIL import Image


def compress_image(image_path, output_path):
	with Image.open(image_path) as img:
		img.thumbnail((img.width, 1000))
		img.save(output_path, quality=90, optimize=True)

def main():
	images_folder = "IMAGES_GOES_HERE"
	images_compressed_folder = "IMAGES_COMPRESSED"

	if not os.path.exists(images_folder):
		os.makedirs(images_folder)

	if not os.path.exists(images_compressed_folder):
		os.makedirs(images_compressed_folder)
	input("Make sure you have all the images you want to compress in the folder 'IMAGES_GOES_HERE' and press enter to continue...")
	
	for image_name in os.listdir(images_folder):
		image_path = os.path.join(images_folder, image_name)
		output_path = os.path.join(images_compressed_folder, image_name)
		compress_image(image_path, output_path)

main()