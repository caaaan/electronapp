# Uygulamayı çalıştırmak
Uygulamayı çalıştırmak için aynı anda farklı terminallerde komut çalıştırmak gerekmektedir.
- 1. terminalde backend klasörüne girip `npm run start` komutunu çalıştırın, compile'ladıktan sonra process'i öldürebilirsiniz veya farklı bi terminalde backend klasörünün içinde oluşacak dist klasörüne girip `node api.js` komutunu çalıştırın (bu api server'ı çalıştırır).
- 2. terminalde frontend klasörüne girip `npm run build` yapın sonra `npm run start` komutunu çalıştırın (bu frontend react projesini çalıştırır).
- 3. terminalde de electronclient klasörüne girip `npm run startn` komutunu çalıştırın (bu electron uygulamasını açacaktır).
# Kurulum

 Gerekli dependencyleri indirmek için teker teker frontend, electronclient ve backend klasörlerine girip terminalde `npm install` komutunu çalıştırabilirsiniz. Bu komut ile girdiğiniz klasörün içindeki package.json dosyalarındaki dependency'leri indirebilirsiniz.

eğer eksik kurulum olduysa aşağıdaki listeden eksik olan dependencyleri kontrol edip indirebilirsiniz.

***backend dependencies:***
1. "cors"
2. "express"
3. "morgan"
   
***frontend dependencies:***
1. "@testing-library/jest-dom”
2. "@testing-library/react"
3. "@testing-library/user-event"
4. "@types/jest"
5. "@types/node"
6. "@types/react"
7. "@types/react-dom"
8. "ajv"
9. "axios"
10. "daisyui"
11. "form-data"
12. "formik"
13. "fs"
14. "path"
15. "react"
16. "react-dom"
17. "react-router-dom"
18. "react-scripts"
19. "ts-node"
20. "typescript"
21. "url"
22. "web-vitals"
23. "yup"
    
***electronclient dependencies:***
1. "axios"
2. "electron"
3. "form-data"
4. "fs"
5. "path"
6. "url"
