import csv
import sys

# -------------------- GLOBAL VARIABLES START --------------------
html_template = ''
data = [] 
output = {}
output_path = 'output/'
ugmo_year = sys.argv[1]
input_path = 'data.csv'
template_path = 'template.txt'
# -------------------- GLOBAL VARIABLES END --------------------

# -------------------- HELPER FUNCTIONS START --------------------
def process_data(person_data):
    person_data['UGMOYEAR'] = ugmo_year
    person_data['SHORT'] = person_data['NAME'].replace(' ', '_').lower()
    if person_data['NICKNAME']:
        name_split = person_data['NAME'].split()
        person_data['DISPLAYNAME'] = name_split[0] + " (" + person_data['NICKNAME'] + ") " + " ".join(name_split[1:])
    else: 
        person_data['DISPLAYNAME'] = person_data['NAME']

    if person_data['MINOR']:
        person_data["DISPLAYMAJOR"] = "studying " + person_data['MAJOR'] + " and minoring in " + person_data['MINOR']
    else:
        person_data["DISPLAYMAJOR"] = "studying " + person_data['MAJOR']
        
def create_html_block(person_data, template):
    process_data(person_data)
    ret = template
    for attr in person_data:
        keyword = "$" + attr + "$" 
        ret = ret.replace(keyword, person_data[attr])
    return ret

def write_to_file(filename, html):
    f= open(filename, "w+")
    f.write(html)

def eval_input():
    global input_path
    global output_path
    global template_path
    index = 1;
    while index < len(sys.argv):
        try:
            if sys.argv[index] == '-i':
                input_path = sys.argv[index+1]
                index += 1
            elif sys.argv[index] == '-o':
                output_path = sys.argv[index+1]
                index += 1
            elif sys.argv[index] == '-t':
                template_path = sys.argv[index+1]
                index += 1
        except:
            print('Invalid command line arguments, using defaults')
        index += 1;

    print('input_path: ' + input_path)
    print('output_path: ' + output_path)
    print('template_path: '  + template_path)
# -------------------- HELPER FUNCTIONS END --------------------

# -------------------- EXECUTABLE CODE START --------------------
eval_input()
data = csv.DictReader(open(input_path))
with open(template_path, 'r') as myfile:
    html_template = myfile.read()

for person in data:
    person_html = create_html_block(person, html_template)
    output[person['SHORT']] = person_html

for key in output:
    write_to_file(output_path + key + '.html', output[key])
# -------------------- EXECUTABLE CODE END --------------------

print("HTML files have been outputted to the \output directory.\n**IMPORTANT** make sure you run rm -rf output/* before you run the next command.\n\nrm -rf ../../../collections/_roster" + ugmo_year + " && cp -a output/. ../../../collections/_roster" + ugmo_year + "/\n")
