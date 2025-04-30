import os
import yaml

def find_chain_of_thought_files(base_dir="project/outputs"):
    thought_files = {}
    for root, dirs, files in os.walk(base_dir):
        if "chain_of_thought.yaml" in files:
            task_id = os.path.basename(root)
            thought_files[task_id] = os.path.join(root, "chain_of_thought.yaml")
    return thought_files

def compile_chain_of_thoughts(thought_files, output_file="compiled_chain_of_thought.yaml"):
    compiled = {}

    for task_id, file_path in thought_files.items():
        try:
            with open(file_path, 'r') as f:
                content = yaml.safe_load(f)
            compiled[task_id] = content
        except Exception as e:
            print(f"❌ Failed to load {file_path}: {e}")

    with open(output_file, 'w') as f:
        yaml.dump(compiled, f, sort_keys=False)

    print(f"✅ Compiled {len(compiled)} chain(s) of thought into '{output_file}'")

if __name__ == "__main__":
    files = find_chain_of_thought_files()
    compile_chain_of_thoughts(files)
