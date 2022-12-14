 R"   R&   (   R   R?   RB   R   R|  (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt   test_instance_binary_operations?  s    	c         C   sz   d } t  | t ? } | d j ?  d } | d j ?  d } |  j | t j ? |  j | t j ? |  j	 | j
 d ? d  S(   Ns?   
            class A(object):
                def __mul__(self, other):
                    return 42
            class B(A):
                pass
            a = B()
            b = B()
            sub = a - b
            mul = a * b
        R   i    R|  i*   (   R   R$   R/   Ry   R   Rz   R*   R   R7   R"   R&   (   R   R?   RB   R   R|  (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt&   test_instance_binary_operations_parent?  s    c         C   s?   d } t  | t ? } | d j ?  d } | d j ?  d } |  j | t j ? |  j | t j ? |  j | j	 d t j
 ? |  j | j	 d j d ? d  S(   Ns(  
            class A(object):
                def __mul__(self, other):
                    return 42
            class B(A):
                def __mul__(self, other):
                    return [42]
            a = B()
            b = B()
            sub = a - b
            mul = a * b
        R   i    R|  i*   (   R   R$   R/   Ry   R   Rz   R*   R   R?   R,   R7   R"   R&   (   R   R?   RB   R   R|  (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt0   test_instance_binary_operations_multiple_methods?  s    c         C   s?   d } t  | t ? } | d } |  j | j ?  t j g ? d  S(   Ns?   
            class A(object):
                def __mul__(self, other):
                    return type.__new__()

            a = A()
            b = A()
            c = a * b
        RR   (   R   R$   R"   R/   R   Rz   (   R   R?   RB   R.   (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt   test_infer_call_result_crash?  s    	
c         C   s,   t  j ?  } |  j | j ?  t j g ? d  S(   N(   R   t	   EmptyNodeR"   R/   R   Rz   (   R   R.   (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt   test_infer_empty_nodes?  s    c         C   s6   d } t  | t ? } | d } |  j | j d ? d  S(   Ns?   
            def decorator():
                def wrapper():
                    return decorator()
                return wrapper

            @decorator()
            def do_a_thing():
                pass
        t
   do_a_thingt   function(   R   R$   R"   t   type(   R   R?   RB   R.   (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt!   test_infinite_loop_for_decorators?  s    
c         C   s<   t  d ? } |  j d g  | j ?  D] } | j ^ q" ? d  S(   Ns?   
            import datetime

            def method(self):
                datetime.datetime = something()

            class something(datetime.datetime):  #@
                pass
        RM   (   R   R?   R?   RC   (   R   R   t   base(    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt   test_no_infinite_ancestor_loop?  s
    	c         C   s>   d } t  | t ? } | j j } |  j t t | j ?  ? d  S(   Ns?   
            class Test:
                def __init__(self):
                    self.config = {0: self.config[0]}
                    self.config[0].test() #@
        (   R   R$   R3   t   exprR!   R   R   R)   (   R   R?   RB   R?  (    (    s5   Lib\site-packages\astroid\tests\unittest_inference.pyt   test_stop_iteration_leak  s    c         C   s0  d } t  | t ? } |  j | d g  ? |  j | d d g ? |  j | d d g ? |  j | d d d d g ? 