import os

# Specify the base directory
base_directory = '.'

# Specify the output file name
output_file = 'combined.txt'

# Open the output file in write mode
with open(output_file, 'w', encoding='utf-8') as outfile:
    # Iterate over each file in the directory and its subfolders
    for root, dirs, files in os.walk(base_directory):
        for filename in files:
            # Skip the output file itself and any non-text files
            if filename == output_file or not filename.endswith(('.txt', '.js', '.html', '.css')):
                continue
            
            # Construct the file path
            filepath = os.path.join(root, filename)
            
            # Write the file path to the output file
            relative_path = os.path.relpath(filepath, base_directory)
            outfile.write(relative_path + '\n')
            outfile.write("'''\n")
            
            # Open the file and read its content
            with open(filepath, 'r', encoding='utf-8') as infile:
                content = infile.read()
                # Write the file content to the output file
                outfile.write(content + '\n')
            
            outfile.write("'''\n\n")

print(f"Combined all files into {output_file}")