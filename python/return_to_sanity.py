def mystery():
    return {'sanity': 'Hello'}


#tests
result=mystery()
Test.assert_equals(type(result), dict, "Mystery did not the right kind of object")
Test.assert_equals(result["sanity"], 'Hello', 'Mystery has not returned to sanity')
