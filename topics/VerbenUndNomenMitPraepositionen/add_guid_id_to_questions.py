import uuid
import re

# Read the contents of the file
with open('Questions.js', 'r') as file:
    content = file.read()

# Extract the JavaScript array from the file
start_index = content.find('[')
end_index = content.rfind(']') + 1
js_array = content[start_index:end_index]

# Split the array into individual objects
objects = re.findall(r'{.*?}', js_array, re.DOTALL)

# Add the "id" field to each object
updated_objects = []
for obj in objects:
    # Extract the object properties
    sentence = re.search(r'sentence:\s*"(.*?)"', obj).group(1)
    options_match = re.search(r'options:\s*\[(.*?)\]', obj, re.DOTALL)
    options_str = options_match.group(1).strip()
    options = [opt.strip().strip('"') for opt in options_str.split(',')]
    answer = re.search(r'answer:\s*"(.*?)"', obj).group(1)

    # Create the updated object with the "id" field
    updated_obj = f"""{{
        id: "{str(uuid.uuid4())}",
        options: [{', '.join(f'"{opt}"' for opt in options)}],
      sentence: "{sentence}",
      answer: "{answer}"      
    }}"""
    updated_objects.append(updated_obj)

# Join the updated objects back into an array
updated_js_array = '[\n' + ',\n'.join(updated_objects) + '\n  ]'

# Update the file with the modified JavaScript array
with open('Questions.js', 'w') as file:
    file.write(content[:start_index] + updated_js_array + content[end_index:])

print("File updated successfully.")