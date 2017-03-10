candidate1 = { 'min_salary'=>120000 }
candidate2 = { 'min_salary'=>190000 }
job1 = { 'max_salary'=>130000 }
job2 = { 'max_salary'=>80000 }
job3 = { 'max_salary'=>171000 }

def match(candidate, job)
 candidate['min_salary'] * 0.9 <= job['max_salary']
end