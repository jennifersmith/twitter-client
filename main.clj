(ns main)
(def jquery (js* "$"))

(.ready (jquery (js* "document"))
   (fn []
     (-> (jquery "div.meat")
         (.html "This is a test.")
         (.append "<div>Look here!</div>"))))
