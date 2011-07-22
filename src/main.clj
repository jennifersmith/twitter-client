(ns main 
  (:require 
    [goog.net.Jsonp :as jsonp]
    [goog.events :as events]
    [goog.dom :as dom]))

(def flickr-uri "http://api.flickr.com/services/feeds/photos_public.gne")

(defn log [& args]
  (js* "console.log(~{})" (apply pr-str args)))

(defn receive-kittens [json]
  (let [{:keys [items]} (js->clj json :keywordize-keys true)]
    (log (count items))))

(defn get-kittens []
  (.send (goog.net.Jsonp. flickr-uri "jsoncallback")
        (.strobj
          {"tags" "cat" "tagmode" "any" "format" "json"})
        receive-kittens))

(events/listen (dom/getElement "go") events/EventType.CLICK
  get-kittens)



